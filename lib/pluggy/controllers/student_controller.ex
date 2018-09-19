defmodule Pluggy.StudentController do
  
  require IEx

  alias Pluggy.Student
  alias Pluggy.User
  import Pluggy.Template, only: [render: 2]
  import Plug.Conn, only: [send_resp: 3]


  def index(conn) do

    #get user if logged in
    session_user = conn.private.plug_session["user_id"]
    current_user = case session_user do
      nil -> nil
      _   -> User.get(session_user)
    end

    send_resp(conn, 200, render("students/index", students: Student.hall(), student: current_user))
  end
  def login(conn, params) do
		username = params["username"]
		pwd = params["pwd"]

		result =
		  Postgrex.query!(DB, "SELECT id, password FROM students WHERE username = $1", [username],
		    pool: DBConnection.Poolboy
		  )

		case result.num_rows do
		  0 -> #no user with that username
		    redirect(conn, "/students")
		  _ -> #user with that username exists
		    [[id, password]] = result.rows

		    #make sure password is correct
		    if Bcrypt.verify_pass(pwd, password) do
		      Plug.Conn.put_session(conn, :user_id, id)
		      |>redirect("/students")
		    else
		      redirect(conn, "/students")
		    end
		end
	end

	def logout(conn) do
		Plug.Conn.configure_session(conn, drop: true)
		|> redirect("/students")
  end
  def list(conn) do
    session_user = conn.private.plug_session["user_id"]

    current_user =
      case session_user do
        nil -> nil
        _ -> Student.get(session_user)
      end 
      # id = current_user.id
      # IEx.pry
      
    send_resp(conn, 200, render("students/list", student: current_user, students: Student.all() ))
  end
  def new(conn),          do: send_resp(conn, 200, render("students/new", []))
  def show(conn, id),     do: send_resp(conn, 200, render("students/show", student: Student.get(id)))
  def edit(conn, id),     do: send_resp(conn, 200, render("students/edit", student: Student.get(id)))
  
  def create(conn, params) do
    Student.create(params)
    redirect(conn, "/students")
  end

  def update(conn, id, params) do
    Student.update(id, params)
    redirect(conn, "/students")
  end

  def destroy(conn, id) do
    Student.delete(id)
    redirect(conn, "/students")
  end

  defp redirect(conn, url) do
    Plug.Conn.put_resp_header(conn, "location", url) |> send_resp(303, "")
  end

end

defmodule Pluggy.Router do
  use Plug.Router

  alias Pluggy.StudentController

  plug Plug.Static, at: "/", from: :pluggy
  plug(:put_secret_key_base)

  plug(Plug.Session,
    store: :cookie,
    key: "_pluggy_session",
    encryption_salt: "cookie store encryption salt",
    signing_salt: "cookie store signing salt",
    key_length: 64,
    log: :debug,
    secret_key_base: "-- LONG STRING WITH AT LEAST 64 BYTES --"
  )

  plug(:fetch_session)
  plug(Plug.Parsers, parsers: [:urlencoded, :multipart])
  plug(:match)
  plug(:dispatch)

  get "/students",           do: StudentController.index(conn)
  get("/students/list",      do: StudentController.list(conn))
  get "/students/new",       do: StudentController.new(conn)
  
  post "/students",          do: StudentController.create(conn, conn.body_params)
  post "/students/login",     do: StudentController.login(conn, conn.body_params)
  post "/students/logout",    do: StudentController.logout(conn)
  
  # should be put /students/:id, but put/patch/delete are not supported without hidden inputs
  post "/students/:id/edit", do: StudentController.update(conn, id, conn.body_params)
  
  # should be delete /students/:id, but put/patch/delete are not supported without hidden inputs
  post "/students/:id/destroy", do: StudentController.destroy(conn, id)
  
  get "/students/:id",       do: StudentController.show(conn, id)
  get "/students/:id/edit",  do: StudentController.edit(conn, id)


  match _ do
    send_resp(conn, 404, "oops")
  end

  defp put_secret_key_base(conn, _) do
    put_in(
      conn.secret_key_base,
      "-- LONG STRING WITH AT LEAST 64 BYTES LONG STRING WITH AT LEAST 64 BYTES --"
    )
  end
end

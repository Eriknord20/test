defmodule Pluggy.Router do
  use Plug.Router

  alias Pluggy.studentController
  alias Pluggy.UserController

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

  get "/students",           do: studentController.index(conn)
  get "/students/new",       do: studentController.new(conn)
  get "/students/:id",       do: studentController.show(conn, id)
  get "/students/:id/edit",  do: studentController.edit(conn, id)
  
  post "/students",          do: studentController.create(conn, conn.body_params)
 
  # should be put /students/:id, but put/patch/delete are not supported without hidden inputs
  post "/students/:id/edit", do: studentController.update(conn, id, conn.body_params)

  # should be delete /students/:id, but put/patch/delete are not supported without hidden inputs
  post "/students/:id/destroy", do: studentController.destroy(conn, id)


  post "/students/login",     do: studentController.login(conn, conn.body_params)
  post "/students/logout",    do: studentController.logout(conn)

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

defmodule Pluggy.Student do
	import IEx
	defstruct(id: nil, username: "", first_name: "", last_name: "", auth: nil)
	alias Pluggy.Student

	def all do
		Postgrex.query!(DB, "SELECT id, username, first_name, last_name, auth FROM students", [], [pool: DBConnection.Poolboy]).rows
		
		|> to_struct_list
		|> to_json
		#|> IO.inspect
	end
	def hall do
		Postgrex.query!(DB, "SELECT id, username, first_name, last_name, auth FROM students", [], [pool: DBConnection.Poolboy]).rows
		|> to_struct_list
	end

	def get(id) when is_integer(id) do
		Postgrex.query!(DB, "SELECT id, username, first_name, last_name, auth FROM students WHERE id = $1 LIMIT 1", [id], [pool: DBConnection.Poolboy]).rows
		|> to_struct
	end
	def get(id) do
		Postgrex.query!(DB, "SELECT id, username, first_name, last_name, auth FROM students WHERE id = $1 LIMIT 1", [String.to_integer(id)], [pool: DBConnection.Poolboy]).rows
		|> to_struct
	end

	def update(id, params) do
		username = params["username"]
		first_name = params["first_name"]
		last_name = params["last_name"]
		
		id = String.to_integer(id)
		Postgrex.query!(DB, "UPDATE students SET username = $1, first_name = $2, last_name = $3 WHERE id = $4", [username, first_name, last_name, id], [pool: DBConnection.Poolboy])
	end

	def create(params) do
		first_name = params["first_name"]
		last_name = params["last_name"]
		username = params["username"]
		pwd = params["pwd"]
		hashed_password = Bcrypt.hash_pwd_salt(pwd)
	
		Postgrex.query!(
		  DB,
		  "INSERT INTO students (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)",
		  [first_name, last_name, username, hashed_password],
		  pool: DBConnection.Poolboy
		)
	end

	def delete(id) do
		Postgrex.query!(DB, "DELETE FROM students WHERE id = $1", [String.to_integer(id)], [pool: DBConnection.Poolboy])	
	end

	def to_struct([[id, username, first_name, last_name, auth]]) do
		%Student{id: id, username: username, first_name: first_name, last_name: last_name, auth: auth}
		
	end

	def to_struct_list(rows) do
		for [id, username, first_name, last_name, auth] <- rows, do: %Student{id: id, username: username, first_name: first_name, last_name: last_name, auth: auth}
	end
	def to_json(list) do
		
		Poison.encode!(list)
		
	end



end
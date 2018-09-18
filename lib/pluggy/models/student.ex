defmodule Pluggy.student do
	
	defstruct(id: nil, username: "", first_name: "", last_name: "", auth: nil)

	alias Pluggy.student

	def all do
		Postgrex.query!(DB, "SELECT * FROM students", [], [pool: DBConnection.Poolboy]).rows
		|> to_struct_list
	end

	def get(id) do
		Postgrex.query!(DB, "SELECT * FROM students WHERE id = $1 LIMIT 1", [String.to_integer(id)], [pool: DBConnection.Poolboy]).rows
		|> to_struct
	end

	def update(id, params) do
		name = params["name"]
		tastiness = String.to_integer(params["tastiness"])
		id = String.to_integer(id)
		Postgrex.query!(DB, "UPDATE students SET name = $1, tastiness = $2 WHERE id = $3", [name, tastiness, id], [pool: DBConnection.Poolboy])
	end

	def create(params) do
		name = params["name"]
		tastiness = String.to_integer(params["tastiness"])
		Postgrex.query!(DB, "INSERT INTO students (name, tastiness) VALUES ($1, $2)", [name, tastiness], [pool: DBConnection.Poolboy])	
	end

	def delete(id) do
		Postgrex.query!(DB, "DELETE FROM students WHERE id = $1", [String.to_integer(id)], [pool: DBConnection.Poolboy])	
	end

	def to_struct([[id, name, tastiness]]) do
		%student{id: id, username: username, first_name: first_name, last_name: last_name, auth: auth}
	end

	def to_struct_list(rows) do
		for [id, username, first_name, last_name, auth] <- rows, do: %student{id: id, username: username, first_name: first_name, last_name: last_name, auth: auth}
	end



end
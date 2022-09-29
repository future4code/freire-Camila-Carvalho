import connection from "../connection"

export const userTableName = "cookenu_users"
export const recipesTableName = "cookenu_recipes"


connection.raw(`
    CREATE TABLE ${userTableName} (
        id VACHAR(255) PRIMARY KEY,
        name VACHAR(255)  NOT NULL,
        email VACHAR(255) NOT NULL UNIQUE,
        password VACHAR(255) NOT NULL
    );

    CREATE TABLE ${recipesTableName} (
        id VACHAR(255) PRIMARY KEY,
        title VACHAR(255)  NOT NULL,
        description VACHAR(25555) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author_id VACHAR(255),
        FOREIGN KEY (author_id) REFERENCES ${userTableName} (id)
    );

`).then(() => console.log(
    "MySql tables were successfully created"
)).catch(error => 
    console.log(error.message)
).finally(()=> {
    connection.destroy()
})




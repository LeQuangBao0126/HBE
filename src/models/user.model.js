
const { EntitySchema } = require('typeorm')

const userEntity = new EntitySchema({
    name: "User", // Will use table name `post` as default behaviour.
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        first_name: {
            type: "varchar",
        },
        last_name: {
            type: "text",
        },
    },
})
module.exports = userEntity
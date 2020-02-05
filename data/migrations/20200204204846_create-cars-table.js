
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();  
        tbl.decimal('VIN')  
            .notNullable()
            .unique();
        tbl.text('make')   
            .notNullable();
        tbl.text('model')  
            .notNullable();
        tbl.decimal('miles')  
            .notNullable();
        tbl.text('transmission');  
        tbl.text('title');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bedrooms'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('description', 80).notNullable()
      table.integer('vacancies', 254).notNullable().unique()
      table.float('value').notNullable()
      table.json('guests')
      table.date('entry_date').notNullable()
      table.date('departure_date').notNullable()
      table.string('how_many_days').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

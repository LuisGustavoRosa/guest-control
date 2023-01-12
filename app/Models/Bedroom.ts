import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
export default class Bedroom extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public description: string;

  @column()
  public vacancies: number;

  @column()
  public value: number;

  @column()
  public guests: Array<String>;

  @column()
  public entry_date: Date;

  @column()
  public departure_date: Date;

  @column()
  public how_many_days: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

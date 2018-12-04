class CreateReadings < ActiveRecord::Migration[5.2]
  def change
    create_table :readings do |t|
      t.string :reading_title
      t.belongs_to :user

      t.timestamp
    end
  end
end

class CreateReadingsCards < ActiveRecord::Migration[5.2]
  def change
    create_table :readings_cards do |t|
      t.belongs_to :reading, index: true
      t.belongs_to :card, index: true
    end
  end
end

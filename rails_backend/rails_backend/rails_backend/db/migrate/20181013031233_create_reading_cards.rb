class CreateReadingCards < ActiveRecord::Migration[5.2]
  def change
    create_table :reading_cards do |t|
      t.belongs_to :reading 

    end
  end
end

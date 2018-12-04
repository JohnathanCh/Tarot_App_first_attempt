class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :card_name
      t.string :card_type
      t.integer :value_int
      t.string :meaning_up
      t.string :meaning_rev
      t.text :description

    end
  end
end

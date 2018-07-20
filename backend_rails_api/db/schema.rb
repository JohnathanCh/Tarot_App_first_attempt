# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_18_201916) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.string "card_type"
    t.integer "value_int"
    t.text "meaning_up"
    t.text "meaning_rev"
    t.text "desc"
  end

  create_table "readings", force: :cascade do |t|
    t.string "reading_name"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_readings_on_user_id"
  end

  create_table "readings_cards", force: :cascade do |t|
    t.bigint "reading_id"
    t.bigint "card_id"
    t.index ["card_id"], name: "index_readings_cards_on_card_id"
    t.index ["reading_id"], name: "index_readings_cards_on_reading_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

class CreateSamples < ActiveRecord::Migration[5.0]
  def change
    create_table :samples do |t|
      t.string :name
      t.string :description
      t.string :content
      t.integer :user_id

      t.timestamps null: false
    end
  end
end

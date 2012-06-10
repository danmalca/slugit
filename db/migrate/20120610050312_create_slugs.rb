class CreateSlugs < ActiveRecord::Migration
  def change
    create_table :slugs do |t|
      t.string :in
      t.string :out

      t.timestamps
    end
    add_index :slugs, :in, :unique => true
  end
end

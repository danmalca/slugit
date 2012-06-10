class Slug < ActiveRecord::Base
  attr_accessible :in, :out

  validates :in,  :presence => true
  validates :out, :presence => true
  
end

class Gradient
  include Mongoid::Document
  include Mongoid::Timestamps

# Fields
  field :code, type: String
  field :session_id, type: String

# Validations
  validates :code, presence: true
  validates :session_id, presence: true
end

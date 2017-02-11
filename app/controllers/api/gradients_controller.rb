class Api::GradientsController < ApplicationController
  def index
    render json: Gradient.ne(session_id: session_id).desc(:updated_at).limit(8)
  end

  def create
    if gradient.update(gradient_params)
      render json: gradient
    else
      render json: { errors: gradient.errors.full_messages }, status: 422
    end
  end

protected

  def gradient
    @gradient ||= Gradient.where(session_id: session_id).first ||
      Gradient.new(session_id: session_id)
  end

  def session_id
    params[:session_id]
  end

  def gradient_params
    params.permit(:code)
  end
end

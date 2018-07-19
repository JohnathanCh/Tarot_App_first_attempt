class ApplicationController < ActionController::Base
    include Knock::Authenticable
    
    def user_id
        decoded_token[0]['user_id']
    end

    def decoded_token
        JWT.decode(request.headers['Authorization'], 'tarotapp', true, {algorithm: 'HS256'})
    end

    def encoded_token
        JWT.encode({user_id: user.id}, 'tarotapp', 'HS256')
    end

    def current_user
        @user ||= User.find_by(id: user.id)
    end

    def logged_in
        !!current_user
    end

    
    private
    # Define unauthorized access json response
        def unauthorized_entity(entity_name)
            render json: { error: "Unauthorized request" }, status:     
            :unauthorized
        end
end

# class ApplicationController < ActionController::API

#     def user_id
#       decoded_token[0]['user_id']
#     end
  
#     def decoded_token
#       JWT.decode(request.headers['Authorization'], 'learnlovecode', true, {algorithm: 'HS256'})
#     end
  
#     def encoded_token(user)
#       JWT.encode({user_id: user.id}, 'learnlovecode', 'HS256')
#     end
  
#     def current_user
#       @user ||= User.find_by(id: user_id)
#     end
  
#     def logged_in
#       !!current_user
#     end
  
# end


class BrowseController <ApplicationController

def browse
	@user = User.where.not(id:current_user.id)
end 

def approve
	user swipes right 
	end

	def declined

	user swipes left 
	end



end
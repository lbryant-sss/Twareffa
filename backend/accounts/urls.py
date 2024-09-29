from django.contrib import admin
from django.urls import path, include
from accounts.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views
urlpatterns = [
    path('user/register', CreateUserView.as_view(), name="register"),
    path("token/", TokenObtainPairView.as_view(), name="get_token"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("api-auth/", include('rest_framework.urls')),
    path("user/profile", views.get_current_user_profile, name='current_user_profile'),
    path("user/edit-profile", views.edit_user_profile, name='eit-user-profile'),
]

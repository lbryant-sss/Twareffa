from django.contrib.auth.models import User
from rest_framework import serializers
from accounts.models import UserProfile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['gender', 'birthday', 'profile_picture', 'phone']


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(source='userprofile')

    class Meta:
        model = User
        fields = ["id", "email", "username", "password", "profile"]
        extra_kwargs = {
            "password": {"write_only": True},
            "email": {"required": True},
            }

    def create(self, validated_data):
        profile_data = validated_data.pop('userprofile')
        user = User.objects.create_user(**validated_data)
        UserProfile.objects.create(user=user, **profile_data)
        return user

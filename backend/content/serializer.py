from django.contrib.auth.models import User
from .models import ContentModel
from rest_framework import serializers


class ContentSerializer(serializers.Serializer):
    class Meta:
        model = ContentModel
        fields = "__all__"
        extra_kwargs = {"author": {"read_only": True}}
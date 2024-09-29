from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, ProfileSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_user_profile(request):
    user = request.user
    serializer = UserSerializer(user, data=request.data, partial=True)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_current_user_profile(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
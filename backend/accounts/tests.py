from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient

class UserProfileTest(TestCase):
    def setUp(self):
        # Create a test user
        self.user = User.objects.create_user('testuser', 'testuser@example.com', 'password123')
        self.client = APIClient()
        
        # Authenticate the client with the test user's credentials
        self.client.login(username='testuser', password='password123')
  		  
    def test_get_user_profile(self):
        # Make a GET request to the profile endpoint
        response = self.client.get('/user/profile/')
        
        # Check if the response status is 200 OK
        self.assertEqual(response.status_code, 200)

        # Check if the response contains expected user data
        self.assertEqual(response.data['username'], 'testuser')
        self.assertEqual(response.data['email'], 'testuser@example.com')

    def test_update_user_profile(self):
        # Make a PUT request to update user profile
        response = self.client.put('/user/profile/', {
            'username': 'updateduser',
            'profile.gender': 'Female',
            'profile.birthday': '1991-01-01'
        })

        # Check if the response status is 200 OK
        self.assertEqual(response.status_code, 200)

        # Check if the user's information is updated
        user = User.objects.get(username='updateduser')
        self.assertEqual(user.profile.gender, 'Female')
        self.assertEqual(user.profile.birthday, '1991-01-01')

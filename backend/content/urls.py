
from django.urls import path
from .views import ContentListCreateView, ContentDelete


urlpatterns = [
    path('/', ContentListCreateView.as_view(), name='content'),
    path('delete-content/<uuid:pk>/', ContentDelete.as_view(), name='delete-content'),
]
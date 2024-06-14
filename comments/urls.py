from . import views
from rest_framework import routers
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import save_data

# urlpatterns = [
#     path('api/comments/', views.save_data, name='save_data'),
#     # other paths
# ]

router = routers.DefaultRouter()
router.register('comments', views.CommentsViewSet, basename='comments')

urlpatterns = router.urls
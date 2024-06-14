from . import views
from rest_framework import routers
from django.urls import path
from rest_framework.routers import DefaultRouter



router = routers.DefaultRouter()
router.register('tocapturecomments', views.TocapturecommentsViewSet, basename='tocapturecomments')

urlpatterns = router.urls


# urlpatterns = [
#     path('127.0.0.1:8000/api/tocapturecomments/', views.TocapturecommentsViewSet.as_view, name="comments"),
# ]



from rest_framework import serializers
from .models import *

class TocapturecommentsSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source="name")
    start = serializers.DateField(source="start_date")
    end = serializers.DateField(source="end_date")
    class Meta:
        model = Tocapturecomments
        fields = ("start", "end", "title")
        


from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from . import serializers
from .models import *
from django.http import HttpResponse
from .models import Tocapturecomments
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TocapturecommentsSerializer

# Create your views here.

class TocapturecommentsViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Tocapturecomments.objects.all()
    serializer_class = TocapturecommentsSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        tocapturecomments = self.queryset.get(pk=pk)
        serializer = self.serializer_class(tocapturecomments)
        return Response(serializer.data)

    def update(self, request, pk=None):
        tocapturecomments = self.queryset.get(pk=pk)
        serializer = self.serializer_class(tocapturecomments, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        tocapturecomments = self.queryset.get(pk=pk)
        tocapturecomments.delete()
        return Response(status=204)







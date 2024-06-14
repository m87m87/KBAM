from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from . import serializers
from .models import *
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CommentsSerializer


# Create your views here.
class CommentsViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer

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
        Comments = self.queryset.get(pk=pk)
        serializer = self.serializer_class(comments)
        return Response(serializer.data)

    def update(self, request, pk=None):
        comments = self.queryset.get(pk=pk)
        serializer = self.serializer_class(comments, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        comments = self.queryset.get(pk=pk)
        comments.delete()
        return Response(status=204)


@api_view(['POST'])
def save_data(request):
    if request.method == 'POST':
        serializer = CommentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
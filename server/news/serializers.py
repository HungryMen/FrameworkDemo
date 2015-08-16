from rest_framework import serializers
from .models import News
from django.contrib.auth.models import User

class NewsSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = News
        fields = ('author', 'title', 'subtitle', 'tags', 'content', 'create')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    news = serializers.HyperlinkedRelatedField(many=True, view_name='news-detail', read_only=True)

    class Meta:
        model = User
        fields = ('username', 'news')
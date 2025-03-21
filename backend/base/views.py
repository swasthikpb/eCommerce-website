from django.shortcuts import render
from django.http import JsonResponse
from  rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from base.products import products
from .models import Product
from .serializer import ProductSerializer

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    
    routes=[
        '/api/products/',
        '/api/products/create/',

        '/api/products/upload/',

        '/api/products/<id>/reviews/',

        '/api/products/top/',
        '/api/products/<id>/',

        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',

    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    try:
        products = Product.objects.all()
        serializer = ProductSerializer(products, many= True)
        return Response(serializer.data)
    except Product.DoesNotExist:
            return Response({'detail': 'Product not found'}, status=404)

@api_view(['GET'])
def getProduct_by_id(request, pk):
    try:
        product = get_object_or_404(Product, _id=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({'detail': 'Product not found'}, status=404)
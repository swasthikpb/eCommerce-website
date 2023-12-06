from django.shortcuts import render
from django.http import JsonResponse
from  rest_framework.decorators import api_view
from rest_framework.response import Response
from base.products import products

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
    return Response(products)

@api_view(['GET'])
def getProduct(request,pk):
    
    product=None
    if product is  None:
        for id in products:
            print(id)
            if id['_id'] == pk:
                product = id
                break

    return Response(product)
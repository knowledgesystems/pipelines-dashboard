# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.http import HttpResponse

from .models import ImportStatus

from django.template import loader

# Create your views here.
def index(request):
    studies_imported = ImportStatus.objects.all()
    template = loader.get_template('overview/index.html')
    context = {
        'studies_imported' : studies_imported
    }
    return HttpResponse(template.render(context, request))

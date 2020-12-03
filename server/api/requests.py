from django.conf import settings

import requests


def fetchYtApi(channelId):
    r = requests.get(f'https://www.googleapis.com/youtube/v3/search?key={settings.YT_KEY}&channelId={channelId}&part=snippet,id&order=date&maxResults=20')

    return r.json()

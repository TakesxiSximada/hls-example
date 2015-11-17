#! /usr/bin/env sh
# -*- coding: utf-8 -*-
ffmpeg -i main.mp4 -codec copy -map 0 -f segment -vbsf h264_mp4toannexb -segment_format mpegts -segment_time 2 -segment_list playlist.m3u8 stream-%03d.ts

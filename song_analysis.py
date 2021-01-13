from bs4 import BeautifulSoup
import codecs
from nltk.probability import *
import nltk

##raw text of file
f_in = open('tech_oliver.txt', 'r')
all_lines = str(f_in.read())

print all_lines


# get rid of apostrophes
all_lines = all_lines.replace("'", "")

##get rid of line breaks
all_lines = all_lines.replace("\n\n", "$$$$$")
all_lines = all_lines.replace("\\n", "\n")

all_lines = all_lines.lower()
all_lines = all_lines.replace("\n", " ")

##tokenize

tokens = nltk.word_tokenize(all_lines)

text = nltk.Text(tokens)
#print type(text)
#print text.collocations()
#text.concordance('weed')

##unique words
#print (set(text))

text = text[:35000]
print len(text)

##number of unique words
print len(set(text))
print len(tokens)

# unique = len(set(text))
# total_words = len(tokens)

print FreqDist(text)
#
fdist = FreqDist(text)
#
import csv
#
#
with open("output.csv", "wb") as fp:
    writer = csv.writer(fp, quoting=csv.QUOTE_ALL)
    writer.writerows(fdist.items())

##dispersion plot
#print text.dispersion_plot(["i"])

##counts
#print text.count("i")

##selection of stuff ("the set of all w such that w is an element of V (the vocabulary) and w has property P".)
#V = set(text)
#long_words = [w for w in V if  "gun" in w]
#print sorted(long_words)

#signal where to do a split
# all_lines = all_lines.split('$$$$$')

##count of a certain word in the list
# print sum(('gun' in i or 'matthew' in i) for i in all_lines)
# import re

## search specific strings
#print 'guns', sum(bool(re.search(r'((\bgun)(s\b|\b))|((\bglock)(s\b|\b))|((\bgat)(s\b|\b))|((\bstrapped)(s\b|\b))|((\bbust)(s\b|\b))|((\bbustin)(s\b|\b|g\b|))|((\bcap)(s\b|\b))|((\bshootin)(s\b|\b|g\b|))|((\bbullet)(s\b|\b|g\b|))|((\bclip)(s\b|\b|g\b|))|((\bpistol)(s\b|\b|g\b|))|((\bbust)(s\b|\b|g\b|))|((\bguage)(s\b|\b|g\b|))|((\bpump)(s\b|\b|g\b|))|((\bchamber)(s\b|\b|g\b|))|((\bberetta)(s\b|\b|g\b|))|((\bsprayed)(s\b|\b|g\b|))|((\bshot)(s\b|\b|g\b|))|((\bbarrel)(s\b|\b|g\b|))|((\bmachine)(s\b|\b|g\b|))|((\bbuckin)(s\b|\b|g\b|))|((\tips)(s\b|\b|g\b|))|((\bcappin)(s\b|\b|g\b|))|((\bsmith)(s\b|\b|g\b|))|((\bwesson)(s\b|\b|g\b|))|((\bmillimeter)(s\b|\b|g\b|))|((\b380)(s\b|\b|g\b|))|((\btool)(s\b|\b|g\b|))|((\bnine)(s\b|\b|g\b|))|((\bpackin)(s\b|\b|g\b|))|((\bbiscuit)(s\b|\b|g\b|))',x)) for x in all_lines)
#print 'drugs', sum(bool(re.search(r'((\bdope)(s\b|\b))|((\bjane)(s\b|\b))|((\bhemp)(s\b|\b))|((\bsmoke)(s\b|\b))|((\bsmokin)(s\b|\b))|((\bherb)(s\b|\b|g\b|))|((\bdrug)(s\b|\b))|((\bounce)(s\b|\b|g\b|))|((\bjunkie)(s\b|\b|g\b|))|((\bkey)(s\b|\b|g\b|))|((\bdankin)(s\b|\b|g\b|))|((\bdank)(s\b|\b|g\b|))|((\bdab)(s\b|\b|g\b|))|((\bget high)(s\b|\b|g\b|))|((\berb)(s\b|\b|g\b|))|((\bweed)(s\b|\b|g\b|))|((\bcrack)(s\b|\b|g\b|))|((\bzooted)(s\b|\b|g\b|))|((\bjoint)(s\b|\b|g\b|))|((\bblunt)(s\b|\b|g\b|))|((\bdime)(s\b|\b|g\b|))|((\caine)(s\b|\b|g\b|))|((\bcocaine)(s\b|\b|g\b|))|((\bdust)(s\b|\b|g\b|))|((\bdustin)(s\b|\b|g\b|))|((\breefer)(s\b|\b|g\b|))|((\brollin)(s\b|\b|g\b|))|((\bleaves)(s\b|\b|g\b|))|((\bchiefer)(s\b|\b|g\b|))|((\bblow)(s\b|\b|g\b|))|((\btootin)(s\b|\b|g\b|))|((\btoot)(s\b|\b|g\b|))|((\bsess)(s\b|\b|g\b|))',x)) for x in all_lines)
#print 'south', sum(bool(re.search(r'((\bsouth)(s\b|\b))|((\bsouthern)(s\b|\b))|((\bcatfish)(s\b|\b))|((\bgrits)(s\b|\b))|((\bcollard)(s\b|\b))|((\bhoecakes)(s\b|\b|g\b|))|((\bhospitality)(s\b|\b))|((\chitlins)(s\b|\b|g\b|))|((\beast point)(s\b|\b|g\b|))|((\batl)(s\b|\b|g\b|))|((\bcollege park)(s\b|\b|g\b|))|((\bclub nikki)(s\b|\b|g\b|))|((\bmagic city)(s\b|\b|g\b|))|((\bcampbellton)(s\b|\b|g\b|))|((\bankhead)(s\b|\b|g\b|))|((\bheadland)(s\b|\b|g\b|))|((\blithonia)(s\b|\b|g\b|))|((\bgeorgia)(s\b|\b|g\b|))|((\batlanta)(s\b|\b|g\b|))|((\bswats)(s\b|\b|g\b|))|((\bcrooked letter)(s\b|\b|g\b|))|((\the brave)(s\b|\b|g\b|))|((\bbraves)(s\b|\b|g\b|))|((\bsavannah)(s\b|\b|g\b|))|((\bherring)(s\b|\b|g\b|))|((\btechwood)(s\b|\b|g\b|))|((\bcascade)(s\b|\b|g\b|))|((\btricities)(s\b|\b|g\b|))|((\btricity)(s\b|\b|g\b|))|((\bdecatur)(s\b|\b|g\b|))|((\bhollywood courts)(s\b|\b|g\b|))|((\bfourth ward)(s\b|\b|g\b|))|((\bthe point)(s\b|\b|g\b|))',x)) for x in all_lines)
#print 'pimp', sum(bool(re.search(r'((\bpimp)(s\b|\b|g\b|))|((\bpimpin)(s\b|\b|g\b|))',x)) for x in all_lines)
#print 'cars', sum(bool(re.search(r'((\bcar)(s\b|\b|g\b|))|((\brim)(s\b|\b|g\b|))|((\bbendin)(s\b|\b|g\b|))|((\bbenz)(s\b|\b|g\b|))|((\bvogue)(s\b|\b|g\b|))|((\bhammer)(s\b|\b|g\b|))|((\bllac)(s\b|\b|g\b|))|((\blac)(s\b|\b|g\b|))|((\bcadillac)(s\b|\b|g\b|))|((\bbrougham)(s\b|\b|g\b|))|((\bbonneville)(s\b|\b|g\b|))|((\bcoup de ville)(s\b|\b|g\b|))|((\bdorado)(s\b|\b|g\b|))|((\bseville)(s\b|\b|g\b|))|((\bescalade)(s\b|\b|g\b|))',x)) for x in all_lines)
#print 'song count', len(all_lines)

#print all_lines

#phrases = all_lines

#from collections import Counter

#allCounts = Counter()
#occurrenceCounts = Counter()

#for phrase in phrases:
#    words = phrase.split()
#    allCounts.update(words)
#    occurrenceCounts.update(set(words))

#print occurrenceCounts

#import csv

#resultFile = open("output.csv",'wb')
#wr = csv.writer(resultFile, dialect='excel')
#wr.writerows(occurrenceCounts)

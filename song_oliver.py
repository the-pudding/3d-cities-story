
from bs4 import BeautifulSoup
import codecs
from nltk.probability import *
import nltk
import sys

reload(sys)
sys.setdefaultencoding('utf8')

f_in = open('tech_clean.txt', 'r')
all_lines = str(f_in.read())


all_lines = all_lines.replace("'", "")

##get rid of line breaks
all_lines = all_lines.replace("\n\n", "$$$$$")
all_lines = all_lines.replace("\\n", "\n")

all_lines = all_lines.lower()
all_lines = all_lines.replace("\n", " ")

##tokenize
tokens = nltk.word_tokenize(all_lines)
text = nltk.Text(tokens)
text = text[:35000]
print(len(text))
print(len(set(text)))

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

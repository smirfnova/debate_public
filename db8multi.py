import requests
from urllib import urlopen
from bs4 import BeautifulSoup as soup
from multiprocessing import Pool
import timeit
import threading
import time

import sys
reload(sys)
sys.setdefaultencoding('utf8')

all_urls = list()
lock = threading.Lock()

#generate all the urls that we will want to scrape through
def generate_urls(): 
	bill_num = { #dictionary with number of bills for each associated type
		"hr": 9045,
		"s": 5084
		#"hres": 1271,
		#"sres": 808,
		#"hconres": 128,
		#"hjres": 110,
		#"sjres": 81,
		#"sconres": 52
	}
	for tag in bill_num: 
		my_url = 'https://www.govtrack.us/congress/bills/116/' + tag
		for i in range(1, bill_num[tag] + 1):
			all_urls.append(my_url + str(i))


#function to scrape each url, parse, then write into a file
def scrape(base_url):
	text_url = base_url + '/text'
	response = requests.get(text_url)
	page_soup = soup(response.text, 'html.parser')
	bill = page_soup.find("p", {"class": "official-title"})
	if bill != None:
		status = page_soup.find('p', {'style': 'margin-bottom: 1.5em'}).text
		if "Passed Congress" not in status:
			temp = bill.text.replace("\n", "")
			temp_2 = temp.replace("\t", "")
			res_text_temp = temp_2.replace(",", "|") #clean the text to better input into .csv file
			res_text = "The United States Federal Government should " + res_text_temp.split(' ', 1)[1]
			print(base_url)
			detail_url = base_url + '/details'
			response2 = requests.get(detail_url)
			page_soup2 = soup(response2.text, 'html.parser')
			section = page_soup2.find(text = 'Subject Areas')
			section = section.next.next
			soup_tags = section.find_all('div', attrs = {'style': 'line-height: 125%;'})
			max = 1
			lock.acquire() #lock file writing, which is a shared resource being accessed
			f = open("db.csv", "a")
			f.write(res_text + ',')
			f.write(base_url + ',')
			if len(soup_tags) < max: #limit the number of associated topic areas tags to be 12
				max = len(soup_tags)
			for i in range(0, max): 
				if i == (max - 1): #last tag
					f.write(soup_tags[i].text.replace(",", "|")) #replace to make clean .csv file
				else :
					f.write(soup_tags[i].text.replace(",", "|") + ',')
			f.write('\n')
			f.close()
			lock.release()

			
start = timeit.default_timer()
filename = "db.csv"
f = open(filename, "w")
headers = "resolution, link, topic1\n"
f.write(headers)
f.flush()
generate_urls()
p = Pool(10)
p.map(scrape, all_urls) #use multithreading for each page retrieval and parsing
p.terminate()
p.join()
stop = timeit.default_timer()
print('Time: ', stop - start) #to keep track of runtime of this script

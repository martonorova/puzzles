import cheerio  from 'cheerio';
import axios from 'axios'

import { eltePuzzlesURL, kfkiPuzzlesURL } from '../constants/scrapeConstants';



const $ = cheerio.load('<h2 class="title">Hello world</h2>')
 
$('h2.title').text('Hello there!')
$('h2').addClass('welcome')

export const content = $.html()
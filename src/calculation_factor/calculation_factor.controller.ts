import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalculationFactorService } from './calculation_factor.service';
import { CreateCalculationFactorDto } from './dto/create-calculation_factor.dto';
import { UpdateCalculationFactorDto } from './dto/update-calculation_factor.dto';
import { sendEmail } from 'src/common/functions/sendEmails';
import axios from "axios";
import * as cheerio from 'cheerio';
import https from "https";


@Controller('calculation-factor')
export class CalculationFactorController {
  constructor(private readonly calculationFactorService: CalculationFactorService) {}

  @Post()
  async create(@Body() createCalculationFactorDto: CreateCalculationFactorDto) {

    let RATES = {
      DOLLAR: {code: "dolar", rate: 0},
      EURO: {code: "euro", rate: 0},
    }

    // ----- Scraping BCV
    let response = {
      rate: 0,
      coin: 'EURO',
      result: {}
    };

    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    const scraperBcv = async ({RATES}) => {
      try {
        const resp = await axios.get(process.env.UrlBcv, {
          httpsAgent: agent,
        });
        
        const $ = cheerio.load(resp.data);
        let rates_bcv = Object(RATES).map((rate) => {
          return {code: parseFloat(
            $(`#${rate.code} strong`).text().trim().replace(",", ".")
          )}
        });

        // const usdValue = parseFloat(
        //   $(`#dolar strong`).text().trim().replace(",", ".")
        // );
        // const euroValue = parseFloat(
        //   $(`#euro strong`).text().trim().replace(",", ".")
        // );
        
        return { statusCode: 200, body: rates_bcv };
      } catch (error) {
        error.response === undefined || error.isAxiosError ? 
        error = {
          msg: `No se logró establecer conexión con *${error.hostname}* - Posiblemente el sitio web no esté disponible.`,
          details: {
            errno: error.errno,
            code: error.code,
            syscall: error.syscall,
            isAxiosError: error.isAxiosError,
          }
        } :  
        error = error;
        return { statusCode: 400, error };
      }
    };

    let data = await scraperBcv({RATES});  
    console.log("data: " + JSON.stringify(data));

    if (data.statusCode === 400) {
      let args = {};
      await sendEmail(args);
      throw new Error("Error when obtaining BCV rates");
    }

    // Verification Values
    let value = data?.body?.euro > data?.body?.usd ? data?.body?.euro : data?.body?.dolar;
    // Verification Values 

    response.rate = value;
    response.coin=data?.body?.euro > data?.body?.usd ? RATES.EURO.code : RATES.DOLLAR.code;
  
    response.result = this.calculationFactorService.create(createCalculationFactorDto);
    console.log("response: " + JSON.stringify(response));
  
    return response;

    // ----- Scraping BCV


    // ---- Send Email 
    let req = {
      destination_emails: [],
      subject_email: 'Actualización de Factor de Cálculo',
      template: EMAILS_TEMPLATES.UPDATE_CALCULATION_FACTOR.code,
      body: {
        key: 'value',
      }
    }

    let resp_send_email = await sendEmail(req);
    console.log("resp_send_email: " + JSON.stringify(resp_send_email));
    // ---- Send Email 

    return this.calculationFactorService.create(createCalculationFactorDto);
  }

  @Get()
  findAll() {
    return this.calculationFactorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calculationFactorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalculationFactorDto: UpdateCalculationFactorDto) {
    return this.calculationFactorService.update(+id, updateCalculationFactorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calculationFactorService.remove(+id);
  }
}

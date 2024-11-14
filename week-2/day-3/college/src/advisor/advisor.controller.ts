import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { AdvisorService } from './advisor.service';
import { Advisor } from './advisor';
import { DeleteResult } from 'typeorm';

@Controller('advisor')
export class AdvisorController {

  constructor(private readonly advisorService: AdvisorService) {}

  // get all
  @Get()
  @HttpCode(200) //default code if successful, if errors are thrown they will override
  //this will return a Promise that takes in an array of Advisors and once fulfilled will return all advisors
  getAllAdvisors(): Promise<Advisor[]>{
    return this.advisorService.getAllAdvisors();
  }

  // get by id
  @Get(':id')
  @HttpCode(200)
  // using @Param to get the path variable
  // by itself, it return an object with all params as key-value pairs
  // if you specify a param in the paranthesis, it returns just that value
  getAdvisorById(@Param('id') idToFind: number): Promise<Advisor> {
    return this.advisorService.getAdvisorById(idToFind);
  }

  // create new advisor
  @Post('/create')
  @HttpCode(201)
  createAdvisor(@Body() newAdvisor: Advisor) {
    return this.advisorService.createAdvisor(newAdvisor);
  }

  // update an advisor
  @Put('/update/:id')
  @HttpCode(200)
  updateAdvisor(@Param('id') routeId: number, @Body() advisorToUpdate) {
    return this.advisorService.updateAdvisor(routeId, advisorToUpdate);
  }

  // delete an advisor
  @Delete('/delete/:id')
  @HttpCode(204)
  deleteAdvisor(@Param('id') id: number): Promise<DeleteResult> {
    return this.advisorService.deleteAdvisor(id);
  }

}

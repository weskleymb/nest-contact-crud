import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Contact> {
    return this.contactsService.findOne(+id);
  }

  @Post()
  create(@Body() contact: Contact): Promise<Contact> {
    return this.contactsService.create(contact);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() contact: Contact): Promise<Contact> {
    return this.contactsService.update(+id, contact);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.contactsService.remove(+id);
  }
}

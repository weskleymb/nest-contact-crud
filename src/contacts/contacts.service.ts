import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
  ) {}

  findAll(): Promise<Contact[]> {
    return this.contactsRepository.find();
  }

  findOne(id: number): Promise<Contact> {
    return this.contactsRepository.findOneBy({ id });
  }

  create(contact: Contact): Promise<Contact> {
    return this.contactsRepository.save(contact);
  }

  async update(id: number, contact: Contact): Promise<Contact> {
    await this.contactsRepository.update(id, contact);
    return this.contactsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.contactsRepository.delete(id);
  }
}

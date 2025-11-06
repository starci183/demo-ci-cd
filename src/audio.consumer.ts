import { Processor, WorkerHost } from '@nestjs/bullmq'
import { Job } from 'bullmq'

@Processor('audio')
export class AudioConsumer extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    console.log('Tao da bat dau xu ly video am nhac');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log('Proccessed job', job.data);
    return {};
  }
}
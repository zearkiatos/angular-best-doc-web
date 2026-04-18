import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';

@Component({
  selector: 'app-new-document',
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './new-document.html',
  styleUrl: './new-document.scss'
})
export class NewDocument implements OnInit {
  fileToUpload: File | null = null;
  private logger = inject(AppLoggerService);
  handleFileInput(files: FileList | null) {
    if (!files || files.length === 0) {
      this.fileToUpload = null;
      this.logger.warn('No file selected for upload ⚠️', {
        scope: 'NewDocumentComponent',
        tags: ['new-document', 'file-upload', 'no-file-selected'],
      });
      return;
    }
    this.fileToUpload = files.item(0);
    this.logger.info('File selected for upload 📁✅', {
      scope: 'NewDocumentComponent',
      tags: ['new-document', 'file-upload', 'file-selected'],
      extra: { fileName: this.fileToUpload?.name, fileSize: this.fileToUpload?.size },
    });
  }
  ngOnInit(): void {
    this.logger.info('NewDocument initialized 🚥✅', {
      scope: 'NewDocument',
      tags: ['new-document', 'init'],
    });
  }
}

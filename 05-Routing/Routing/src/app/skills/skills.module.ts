import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillResolverService } from './skill-resolver.service';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

const skillRoutes: Routes = [
  {
    path: '',
    component: SkillsListComponent,
    children: [],
  },
  {
    path: ':id',
    component: SkillsEditComponent,
    resolve: { skillData: SkillResolverService },
  },
];

@NgModule({
  declarations: [SkillsListComponent, SkillsEditComponent, SkillRowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(skillRoutes),
    MaterialModule,
    FormsModule,
  ],
})
export class SkillsModule {}

export * from './authController.service';
import { AuthControllerService } from './authController.service';
export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './linkMarkController.service';
import { LinkMarkControllerService } from './linkMarkController.service';
export * from './noteController.service';
import { NoteControllerService } from './noteController.service';
export * from './recipeController.service';
import { RecipeControllerService } from './recipeController.service';
export * from './tagController.service';
import { TagControllerService } from './tagController.service';
export const APIS = [AuthControllerService, BasicErrorControllerService, LinkMarkControllerService, NoteControllerService, RecipeControllerService, TagControllerService];

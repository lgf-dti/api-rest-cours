import { Router } from 'express';
import { UserController } from '../controllers/User';


/**
 * Configuration des routes pour les utilisateurs
 */
export class UserRoutes {
  public router: Router;
  private userController: UserController;


  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }


  private initializeRoutes(): void {
    // POST /api/users - Créer un utilisateur
    this.router.post('/', this.userController.createUser);
    // GET /api/users - Récupérer tous les utilisateurs
    this.router.get('/', this.userController.getAllUsers);
    // GET /api/users/:id - Récupérer un utilisateur par ID
    this.router.get('/:id', this.userController.getUserById);
        // GET /api/users/:id - Récupérer un utilisateur par ID
    this.router.delete('/:id', this.userController.deleteUser);
      //  PATCH /api/users/:id - Update un utilisateur par ID
    this.router.patch('/:id', this.userController.updateUser);
  }
}

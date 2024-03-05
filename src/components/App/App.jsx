import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "routes/PrivateRoute";
import { RestrictedRoute } from "routes/RestrictedRoute";

// import { RestrictedRoute } from 'routes/RestrictedRoute';

const HomePage = lazy(() => import('pages/Home'));
const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Registration'));
const ForgotPasswordPage = lazy(() => import('pages/ForgotPassword'));

export function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<SharedLayout />}/>
        <Route index element={<RestrictedRoute redirectTo="/login" component={<HomePage />}/>} 
      />
        <Route
          path="signup"
          element={
            <PrivateRoute
              redirectTo={'/'}
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path="login"
          element={
            <PrivateRoute
              redirectTo={'/'}
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="forgot_password"
          element={
            <PrivateRoute
              redirectTo={'/'}
              component={<ForgotPasswordPage />}
            />
          }
        />
       
        <Route path="*" redirectTo={'/'} />

    </Routes>
  </Suspense>
  );
}


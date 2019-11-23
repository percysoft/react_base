import styled from 'styled-components';
import { COLORS } from '@/assets/styles/colors';

export const ContainerBody = styled.div`
  background: ${COLORS.BACKGROUND};
  display: inline-table;
  width: 100%;
  height: 100vh;
`;

export const ContainerContent = styled.div`
  display: flex;
  width: 95%;
  margin-top: 88px;
  margin-left: 5%;
  position: relative;
`;

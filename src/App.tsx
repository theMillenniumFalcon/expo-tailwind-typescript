import { SafeAreaView, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledSafeArea = styled(SafeAreaView);
const StyledText = styled(Text);

export default function App() {
  return (
    <StyledSafeArea className='flex h-full bg-[#000] items-center justify-center'>
      <StyledText className='text-white text-2xl text-center p-5'>
        Hello World
      </StyledText>
    </StyledSafeArea>
  );
}
